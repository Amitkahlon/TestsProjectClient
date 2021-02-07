import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import '../../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Container textAlign='center'>
                <div>
                    <Header as='h1'>
                        Welcome to Testim
                    </Header>
                    <Header sub>The modern way to get 100!</Header>
                </div>

            </Container>
        </div>
    )
}

export default HomePage;