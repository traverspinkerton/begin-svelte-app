@app
begin-app

@static

@http
get /api
get /addrecipe

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
