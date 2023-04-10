from flask import request
from flask_restful import Resource
from services import dbHandler


class Tag(Resource, dbHandler.DbHandler):

    def __init__(self):
        self.loadDb('DATABASE_LINKS')

    def get(self, tag_name):
        if tag_name == 'list':
            links = self.database.getAll()
            tags = set([link['tag'] for link in links])
            return list(tags)
        else:
            tags = self.database.getBy({"tag": tag_name})
            return tags, 200


class Link(Resource, dbHandler.DbHandler):

    def __init__(self):
        self.loadDb('DATABASE_LINKS')

    # CREATE
    def post(self):
        new_link = request.get_json()
        self.database.add(new_link)
        return new_link, 201

    # READ ALL
    def get(self):
        self.loadDb('DATABASE_LINKS')
        links = self.database.getAll()
        return links


class LinkById(Resource, dbHandler.DbHandler):

    def __init__(self):
        self.loadDb('DATABASE_LINKS')

    # READ ONE
    def get(self, link_id):
        self.loadDb('DATABASE_LINKS')
        link = self.database.getById(link_id)
        if link:
            return link
        return {"error": "Link not found"}, 404

    # UPDATE
    def put(self, link_id):
        self.loadDb('DATABASE_LINKS')
        updated_link = request.json
        self.database.updateById(link_id, updated_link)
        return updated_link

    # DELETE
    def delete(self, link_id):
        self.loadDb('DATABASE_LINKS')
        self.database.deleteById(link_id)
        return {"message": "Link deleted successfully"}
