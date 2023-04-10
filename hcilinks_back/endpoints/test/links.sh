
post(){
    curl -X POST http://localhost:5000/links -H 'Content-Type: application/json' -d '''{
        "title": "New Link",
        "tag": "public",
        "link": "http://newlink.com",
        "description": "Description for New Link",
        "emoji": "👍"
    }'''
}


get(){
    curl -X GET http://localhost:5000/links
}

getById(){
    curl -X GET http://localhost:5000/links/$1
}

put(){
    curl -X PUT http://localhost:5000/links/$1 -H 'Content-Type: application/json' -d '''{
        "title": "Updated Link",
        "tag": "private",
        "link": "http://updatedlink.com",
        "description": "Updated description for Link",
        "emoji": "👌"
    }'''
}

delete(){
    curl -X DELETE http://localhost:5000/links/$1
}

tagList(){
     curl -X GET http://localhost:5000/tags
}

getByTag(){
    curl -X POST http://localhost:5000/tags/$1
}

'''
post
get | jq '.'
put "241797466129163354" 
getById "241797466129163354" | jq '.'
delete "241797466129163354"
'''
tagList
#getByTag