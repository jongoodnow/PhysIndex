Adding Data to Physindex
====

Currently the only way to contribute data to the live PhysIndex database is to submit a properly formatted CSV.

There are 5 different data types you can add as a row in the spreadsheet. You can only reference previous rows in the sheet. Do not reference things that you added afterwards.

Subjects
----

These are areas of study, like "Physics 1" or "Statistical Mechanics." You should write these first.

Format the columns in the row as:

```sh
Your name | s | title
```

**Your Name:** This is the first column in every row. This should be your name, so that other contributors can tell that you wrote it.

**s:** This the identifier for the data type. Every data type will have a letter in the second column for this.

**title:** The name of the subject, like "Physics 1 (Mechanics)."

Sources
----

Reputable sources that back up your data, or tell users where they can learn more. Please use APS style citations.

```sh
your name | c | title | authors | publisher | pub_city | year | identifier
```