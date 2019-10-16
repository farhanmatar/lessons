import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
        return (
            <div>
                <ButtonToolbar>
                <Button variant="danger">danger Button</Button>
                <Button variant="info">info Button</Button>
                <Button variant="success">success Button</Button>
                <Button variant="warning">warning Button</Button>

                </ButtonToolbar>
            </div>
        )
    }

