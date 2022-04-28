palavras = { 'fulano': 50, 'Siclano': 20, 'beltrano': 2, 'dia': 5}

print('Maior frequencia: ', max(palavras.values()))

acoes = {'GM': 'General Motors', 'CAT': 'Caterpillar', 'EK': 'Eastman Kodak'}

compras = [('GM', 100, '10/09/2001', 48), ('CAT', 100, '01/04/1999', 24),('GM', 200, '01/06/1998', 56)]

resumo = {}

for venda in compras:
    if(resumo.__contains__(venda[0])):
        resumo[venda[0]] = resumo[venda[0]] + venda[1]
    else:
        resumo[venda[0]] = venda[1] 
    print(venda)

print('\n # Resumo # \n')
print(resumo)