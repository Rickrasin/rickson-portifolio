import * as React from "react";
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Text,
    Heading,
} from "@react-email/components";

type Props = { name: string; email: string; message: string };

export default function ContactEmail({ name, email, message }: Props) {
    return (
        <Html>
            <Head />
            <Preview>Novo contato de {name}</Preview>
            <Body style={{ backgroundColor: "#f9f9f9", fontFamily: "sans-serif" }}>
                <Container
                    style={{
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        border: "1px solid #eee",
                    }}
                >
                    <Heading as="h2">Novo contato do portfólio</Heading>
                    <Text><b>Nome:</b> {name}</Text>
                    <Text><b>Email:</b> {email}</Text>
                    <Text><b>Mensagem:</b></Text>
                    <Text>{message}</Text>
                </Container>
            </Body>
        </Html>
    );
}
