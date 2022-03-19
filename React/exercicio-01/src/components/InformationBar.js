
export const InformationBar = ({ repos }) => (
    <section className="alert alert-primary">
        {
            repos ?
            <p>
                Quantidade de Repositórios: {repos.length}  <br/>
                Proprietário: {repos.length > 0 ? repos[0].owner.login : ''}
            </p>
            :
            'Informações'

        }
    </section>
);