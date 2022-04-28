"""
Remoção dos espaços
"""
nome = input('Escreva um nome: ')
print(f"Nome sem espaço a direita: [{nome.rstrip()}]")
print(f"Nome sem espaço a esquerda: [{nome.lstrip()}]")
print(f"Nome sem espaço: [{nome.strip()}]")