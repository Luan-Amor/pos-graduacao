"""
Pratos oferecidos pelo restaurante
"""
pratos = ('Strogonoff', 'Pizza', 'Salpicão', 'Cachorro quente', 'Pudim')

"""
Listar os pratos do restaurante
"""
for prato in pratos:
    print(prato)

"""
Alteração de valores da tupla
pratos[0] = 'Feijoada'
ERROR:TypeError: 'tuple' object does not support item assignment
"""
print('\n Pratos 2 \n')
pratos2 = ('Strogonoff', 'Pizza', 'Salpicão', 'Feijoada', 'Canjica')

for prato2 in pratos2:
    print(prato2)