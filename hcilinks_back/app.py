from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
from endpoints import links

from services import dbHandler

app = Flask(__name__)
api = Api(app)
load_dotenv()

dh = dbHandler.DbHandler()

api.add_resource(links.Link, '/links')
api.add_resource(links.LinkById, '/links/<string:link_id>')
api.add_resource(links.Tag, '/links/tags/<string:tag_name>')


if __name__ == '__main__':
    app.run(debug=True)
