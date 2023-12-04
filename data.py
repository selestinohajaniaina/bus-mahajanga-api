# ouvrir la base (bus.json) qui stoque le liste de trajet existe
with open('bus.json', 'r') as file:
    data = file.read()
    bus = eval(data)["data"]