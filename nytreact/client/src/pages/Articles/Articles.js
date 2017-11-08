import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Article extends Component {
  state = {
    article: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getBooks()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search</h1>
            </Jumbotron>
            <form>
              <Input name="topic" placeholder="Topic (required)" />
              <Input name="start" placeholder="Start Year (required)" />
              <Input name="end" placeholder="End Year(Optional)" />
              <FormBtn>Search</FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Resultst</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(articles => (
                  <ListItem key={articles._id}>
                    <a href={"/articles/" + articles._id}>
                      <strong>
                        {articles.title} by {articles.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
