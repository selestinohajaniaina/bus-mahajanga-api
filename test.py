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
                    "BUS_NAME": i['name'],
                    "BUS_PLAQUE": i['plaque'],
                    "YOUR_TRAJET": trj,
                    "TIME": A,
                    "LONG": B
                })
    # ajouter les contenues de liste 'cible' a la fonction get_direction()
    return cible

# print(get_direction('jovena', 'manjarisoa'))