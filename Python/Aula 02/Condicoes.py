idade = int(input('Informe a sua idade: '))

if idade < 2: 
    print('Você ainda é um bebê.')
elif idade < 4:
    print('Você é uma criança.')
elif idade < 13:
    print('Você é um(a) garot(a).')
elif idade < 20:
    print('Você é um(a) adolescente.')
elif idade < 65:
    print('Você é um adulto')
else:
    print('Você é um(a) idos(a).')