import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

const PersonalDetails = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="First name" />
              )}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Last name" />
              )}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control {...field} type="email" placeholder="Email" />
          )}
        />
      </Form.Group>

      <Form.Group controlId="formNationality">
        <Form.Label>Nationality</Form.Label>
        <Controller
          name="nationality"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control as="select" {...field}>
              <option value="Azerbaijan">Azerbaijan</option>
              {/* Добавьте другие варианты здесь */}
            </Form.Control>
          )}
        />
      </Form.Group>

      <Form.Group controlId="formCompany">
        <Form.Label>Company / Organization</Form.Label>
        <Controller
          name="company"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              {...field}
              type="text"
              placeholder="Company / Organization"
            />
          )}
        />
      </Form.Group>

      <Form.Group controlId="formCountryOfOrigin">
        <Form.Label>Country of Origin</Form.Label>
        <Controller
          name="countryOfOrigin"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              {...field}
              type="text"
              placeholder="Country of Origin"
            />
          )}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit" variant="primary">
          Update
        </Button>
      </Form.Group>

      <Form.Group controlId="formChangePassword">
        <Controller
          name="changePassword"
          control={control}
          render={({ field }) => (
            <Form.Check type="checkbox" label="Change password" {...field} />
          )}
        />
      </Form.Group>
    </Form>
  );
};

export default PersonalDetails;
