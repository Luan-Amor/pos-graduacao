"""
Criando uma lista de áreas
"""

patio = 11.25
cozinha = 18.0
sala = 20.0
quarto = 10.75
banheiro = 9.50

areas = [patio, cozinha]

areas.append(sala)
areas.append(quarto)
areas.append(banheiro)

print(areas)

"""
Colocar a lista reversa
"""
areas.reverse()
print(areas)

"""
Exibindo áreas especificas
"""
print(areas[1],areas[2], areas[-1] )

"""
Soma de áreas
"""
print(areas[1] + areas[3])