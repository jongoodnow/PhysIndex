# the dumpdata command adds a special character to the beginning of json files
# that causes django to read them as invalid json.
# one way to solve this problem is to copy and paste the contents of a file into
# a blank json.

Function DeleteIfExists($fname)
{
    If (Test-Path $fname)
    {
        Remove-Item $fname
    }
}

Function JsonInit($app, $model, $fname)
{
    $model_coords = $app + "." + $model
    python manage.py dump_object $model_coords '*' > $fname
}

Function JsonCopy($oldf, $newf)
{
    $oldcontent = Get-Content $oldf
    $BOMbeGone = New-Object System.Text.UTF8Encoding($False)
    [System.IO.File]::WriteAllLines($oldf, $oldcontent, $BOMbeGone)
}

Function ModelInit($app, $model, $oldf, $newf)
{
    DeleteIfExists $newf
    DeleteIfExists $oldf
    JsonInit $app $model $oldf
    JsonCopy $oldf $newf
    DeleteIfExists $oldf
}

Function SpecificModelInit($model)
{
    $regitem = gci -path search\fixtures
    $regpath = $regitem.DirectoryName[0]
    $oldpath = $regpath + "\" + $model + "_.json"
    $newpath = $regpath + "\" + $model + ".json"
    ModelInit search $model $oldpath $newpath
}

SpecificModelInit equation
SpecificModelInit searchterm
SpecificModelInit variable
SpecificModelInit unit
SpecificModelInit subject
SpecificModelInit source

DeleteIfExists all_models.json
python manage.py merge_fixtures search\fixtures\subject.json search\fixtures\source.json search\fixtures\searchterm.json search\fixtures\unit.json search\fixtures\variable.json search\fixtures\equation.json > search\fixtures\all_models_.json
JsonCopy search\fixtures\all_models_.json search\fixtures\all_models.json
Remove-Item search\fixtures\all_models_.json