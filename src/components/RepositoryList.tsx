import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repository {
    name:string;
    description:string;
    html_url:string;
}

//https://api.github.com/users/juniorknx/repos

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/juniorknx/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository =>{
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}     
            </ul>
        </section>
    );
}