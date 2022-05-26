# menu-hub

## Montando o ambiente local
Para montar o app localmente, primeiro deve montar um ambiente virtual python

```
python3 -m venv venv
```

Após montar o ambiente virtual deve ativa-lo

> Windows

```
venv\Script\activate
```
>Linux
```
venv/Script/activate
```
Com o ambiente ativo, baixe as bibliotecas necessárias para a aplicação
```
pip install -r requirements.txt
```
## Executando o app

Para executar localmente, inicialize o banco de dados
```
python manage.py migrate
```
Execute o programa
```
python manage.py runserver
```