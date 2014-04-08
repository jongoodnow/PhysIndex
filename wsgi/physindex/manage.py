#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "physindex.settings")

    from django.core.management import execute_from_command_line

    if os.environ.has_key('OPENSHIFT_REPO_DIR'):
        # we're on the server. use server settings
        execute_from_command_line(sys.argv)
    else:
        # means we're running locally. use local_settings instead
        os.environ["DJANGO_SETTINGS_MODULE"] = "physindex.local_settings"
        execute_from_command_line(sys.argv)
