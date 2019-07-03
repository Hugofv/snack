import React from 'react';
import Input from '../../../../library/Input';
import { Box, Flex } from '../../../../library/FlexBox';
import Label from '../../../../library/Label';
import Radio from '../../../../library/Radio';
import Button from '../../../../library/Button';
import { withFormik, FormikProps } from 'formik';
import ClientModel from '../../../../models/ClientModel';
import formatCnpj from '../../../../utils/formatCnpj';
import formatCpf from '../../../../utils/formatCpf';

type Props = {
  createClient: (values: ClientModel) => JSX.Element;
};

const Form = ({ values, handleChange, setFieldValue, handleSubmit, isSubmitting, createClient }: Props & FormikProps<ClientModel>) => {


  const isBusiness = () => {
    return values.document === 'business'
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex w='60%' fw='wrap' ai='center' fd='row' jc='space-around'>
        <Flex mb={3} ml={3} fd='row'>
          <Radio
            value='individual'
            name='type'
            label='Individual'
            onChange={(e: string) => {
              setFieldValue('type', e)
              setFieldValue('document', '')
            }}
            checked={values.type === 'individual'} />

          <Radio
            value='business'
            name='type'
            label='Business'
            onChange={(e: string) => {
              setFieldValue('type', e)
              setFieldValue('document', '')
            }} checked={values.type === 'business'} />
        </Flex>

        <Box mb={3}>
          <Label>Nome<span>*</span></Label>
          <Input name='name' onChange={handleChange} />
        </Box>

        <Box mb={3}>
          <Label>Documento<span>*</span></Label>
          <Input name='document'
            value={values.document}
            maxLength={isBusiness() ? 18 : 14}
            onChange={({ target: { value } }) => setFieldValue('document', isBusiness() ? formatCnpj(value) : formatCpf(value))} />
        </Box>

        <Box>
          <Button type='submit' loading={isSubmitting}>Salvar</Button>
        </Box>
      </Flex>
    </form>
  )
}

export default withFormik<Props, ClientModel>({
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