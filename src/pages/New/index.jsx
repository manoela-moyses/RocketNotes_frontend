import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink.toLowerCase()]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handlePressEnterLink(e) {
    if (e.key === 'Enter') {
      setLinks(prevState => [...prevState, newLink.toLowerCase()]);
      setNewLink("");
    }
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag.toLowerCase()]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handlePressEnterTag(e) {
    if (e.key === 'Enter') {
      setTags(prevState => [...prevState, newTag.toLowerCase()]);
      setNewTag("");
    }
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota.")
    }

    if (newLink) {
      return alert("Você deixou um link no campo para adicionar, mas não adicionou. Clique para adicionar o link ou deixe o campo vazio.")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar a tag ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags
    });

    alert("Nota criada com sucesso.");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form className='newNote'>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText
              title="Voltar"
              onClick={handleBack}
            />
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              onKeyDown={handlePressEnterLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                onKeyDown={handlePressEnterTag}
              />
            </div>
          </Section>

          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  );
}