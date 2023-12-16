from data import bus

def get_direction(depart, fin):
    # initialiser une liste pour stoquer les trajets cible 
    cible = []
    # parcourir tout les elements asignees depuis la base
    for i in bus:
        # si le point du depart et point d'arrive entrer par user est exite dans l'arret d'un trajet
        if( depart in i['stop'] and fin in i['stop'] ):
            # A est l'index du point du depart, tandis que B est celle d'arrivee
            A = i['stop'].index(depart)
            B = i['stop'].index(fin) + 1
            # trj est la liste entre l'index A et B
            trj = i['stop'][A : B]
            # si l'index d'arrive est plus petit
            if(A > B):
                # changer la place du A et B
                trj = i['stop'][B-1 : A+1]
                # et ensuit inverson la liste, pour avoir un ordre normal
                trj.reverse()
            # ajoutons cette sequence au liste cible
            cible.append({
                    "BUS_ID":i['id'],
                    # "BUS_NAME": i['name'],
                    # "BUS_PLAQUE": i['plaque'],
                    "YOUR_TRAJET": trj,
                    "TIME": "pas definie",
                    "LONG": "pas definie"
                })
    # ajouter les contenues de liste 'cible' a la fonction get_direction()
    return cible

# print(get_direction('jovena', 'manjarisoa'))


def get_plaque(bus_id):
    # parcourir tout les elements asignees depuis la base
    for i in bus:
        # si id_du_user est egale a la base 
        if( i["id"] == bus_id ):
            return i["plaque"]
            break

def get_color(bus_id):
    for i in bus:
        if( i["id"] == bus_id ):
            return i["color"]
            break

def get_bande(bus_id):
    for i in bus:
        if( i["id"] == bus_id ):
            return i["bande"]
            break

def get_stop(bus_id):
    for i in bus:
        if( i["id"] == bus_id ):
            return i["stop"]
            break

def get_name(bus_id):
    for i in bus:
        if( i["id"] == bus_id ):
            return i["name"]
            break