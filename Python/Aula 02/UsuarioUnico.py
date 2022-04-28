usuarios_correntes = ['João', 'Maria', 'Matheus', 'Gabriel', 'Lucas']

usuarios_novos = ['João', 'Maria', 'Caio', 'Larissa', 'Daniela']

usuarios_repetidos = []

for novo in usuarios_novos:
    if usuarios_correntes.__contains__(novo):
        usuarios_repetidos.append(novo)
        print(f'O nome {novo} não está disponível.')
        continue
    print(f'O nome {novo} está disponível.')
