saldo = float(input('Informe o seu saldo atual: '))
TAXA_CORRECAO = 0.10
tempo = int(input('Quando tempo vc deseja deixar o dinheito? '))
print(f"O seu saldo final será de {(saldo * (TAXA_CORRECAO * 12)) * tempo}")
