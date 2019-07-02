import React from 'react';
import Input from '../../../../library/Input';
import { Box, Flex } from '../../../../library/FlexBox';
import Label from '../../../../library/Label';
import Radio from '../../../../library/Radio';
import Button from '../../../../library/Button';
import { withFormik, FormikProps } from 'formik';
import Client from '../../../../models/Client';

type Props = {
  createClient: (values: Client) => JSX.Element;
};

const Form = ({ values, handleChange, setFieldValue, handleSubmit, isSubmitting, createClient }: Props & FormikProps<Client>) => {

  return (
    <form onSubmit={handleSubmit}>
      <Flex fw='wrap' ai='center' fd='row' jc='space-around'>
        <Flex mb={3} ml={3} fd='row'>
          <Radio value='individual' id='individual' name='type' label='Individual' onChange={(e: string) => setFieldValue('type', e)} checked={values.type === 'individual'} />
          <Radio value='business' id='business' name='type' label='Business' onChange={(e: string) => setFieldValue('type', e)} checked={values.type === 'business'} />
        </Flex>

        <Box mb={3}>
          <Label>Nome<span>*</span></Label>
          <Input name='name' onChange={handleChange} />
        </Box>

        <Box mb={3}>
          <Label>Documento<span>*</span></Label>
          <Input name='document' onChange={handleChange} />
        </Box>

        <Box>
          <Button type='submit' loading={isSubmitting}>Salvar</Button>
        </Box>
      </Flex>
    </form>
  )
}

export default withFormik<Props, Client>({
  mapPropsToValues: () => ({ name: '', document: '', type: 'individual' }),

  validate: values => {
    const errors: any = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    props.createClient(values);
    setSubmitting(false);
  },

})(Form);