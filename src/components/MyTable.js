import { Table } from '@mantine/core';
import { useQuery } from 'react-query';

function MyTable() {


    const fetchFruit = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character",{
        mode: 'cors',  
        headers: {
                
                'Access-Control-Allow-Origin': '*'
              } 
        })
        console.log(response)
        return response.json()

    }
    const { data, status } = useQuery('fruit', fetchFruit)
    if (status === "loading") {
        return <div> loading </div>
    }
    if (status === "error") {
        return <div> Error </div>
    }

    console.log(data)

    const rows = data.results.map((element) => (
        <tr key={element.id}>
            <td>{element.name}</td>
            <td>{element.status}</td>
            <td>{element.species}</td>
            <td>{element.gender}</td>
            <td>{element.location.name}</td>
        </tr>
    ));

    return (
        <Table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Species</th>
                    <th>Gender</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}
export default MyTable