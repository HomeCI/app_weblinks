from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
from flask_cors import CORS
from endpoints import links

from services import dbHandler

app = Flask(__name__)
CORS(app)
api = Api(app)
load_dotenv()

dh = dbHandler.DbHandler()

api.add_resource(links.Link, '/api/links')
api.add_resource(links.LinkById, '/api/links/<string:link_id>')
api.add_resource(links.Tag, '/api/links/tags/<string:tag_name>')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
