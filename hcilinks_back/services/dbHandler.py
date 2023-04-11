import os
import json
from pysondb import db


class DbHandler:

    def loadDb(self, dbkey):
        self.database = db.getDb(self.getDBPath(dbkey))
        return self.database

    def getDBPath(self, dbkey):
        db_name = os.getenv(dbkey, f"db/{dbkey}.json")
        root_dir = os.path.abspath(
            os.path.join(os.path.dirname(__file__), '..'))
        db_path = os.path.join(root_dir, db_name)
        if not os.path.isfile(db_path):
            # Create an empty database file
            with open(db_path, "w") as f:
                json.dump({"data": []}, f)

        return db_path
