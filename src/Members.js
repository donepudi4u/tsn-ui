import React, { useEffect, useState } from 'react'

export default function Members() {

    const [members, setMember] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://tsn-services.azurewebsites.net/getAllMembers").then(response => {
            if (!response.ok) {
                console.error('Response:', response);    
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            setMember(data);
        }).catch(error => {
            console.error('Error fetching employee:', error);
            setError(error.message);
        });
    }, [])


    if (error) return <div>Error: {error}</div>;
    if (!members) return <div>No employee data</div>;



    return (
        <div>
            <h2>Member Details</h2>
            <ul>
                {members.map((employee) => (
                    <li key={employee.id}>
                        <div>Name: {employee.memberId}</div>
                        <div>Name: {employee.firstName}</div>
                        <div>Email: {employee.lastName}</div>
                        <div>Position: {employee.email}</div>
                        <div>Position: {employee.address}</div>
                        <div>Position: {employee.mobile}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
