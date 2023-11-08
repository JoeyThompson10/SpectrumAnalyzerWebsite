import React from 'react';

const Contact = () => {
    const contacts = [
        { name: 'Joey Thompson', email: 'jthom282@students.kennesaw.edu' },
        { name: 'Ashly Altman', email: 'aaltman6@students.kennesaw.edu' },
        { name: 'Brooke Ebetino', email: 'bebetino@students.kennesaw.edu' },
        { name: 'Tyler Haley', email: 'thaley10@students.kennesaw.edu' },
        { name: 'Masood Afzali', email: 'safzali1@students.kennesaw.edu' },
        {
            name: 'Nasiya Sharif',
            title: 'Kennesaw State University Capstone Project Manager',
            description: 'Organizer of the capstone project teams for Kennesaw State University. Acts as the intermediary between the project development team and the Robins Air Force Base representative.',
            email: 'nrahman1@students.kennesaw.edu'
        },
    ];

    return (
        <div>
            <h1>Contact</h1>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <h2>{contact.name}</h2>
                        {contact.title && <h3>{contact.title}</h3>}
                        {contact.description && <p>{contact.description}</p>}
                        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;