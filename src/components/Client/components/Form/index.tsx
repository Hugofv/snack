import React from 'react';
import Input from '../../../../library/Input';
import { Box, Flex } from '../../../../library/FlexBox';
import Label from '../../../../library/Label';
import Radio from '../../../../library/Radio';
import ErrorField from '../../../../library/ErrorField';
import Button from '../../../../library/Button';
import { withFormik, FormikProps } from 'formik';
import ClientModel from '../../../../models/ClientModel';
import formatCnpj from '../../../../utils/formatCnpj';
import formatCpf from '../../../../utils/formatCpf';
import { Action } from 'redux';

import { container } from './styles';

/**
 * Props do component
 */
type Props = {
  createClient: (values: ClientModel) => () => Action;
  loading: boolean;
};

/**
 * Component Form.
 */
const Form = ({ values, handleChange, setFieldValue, handleSubmit, touched, errors, loading }: Props & FormikProps<ClientModel>) => {

  const isBusiness = () => {
    return values.document === 'business'
  }

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <Flex css={container} fw='wrap' ai='center' fd='row' jc='space-around'>
        <Flex mb={3} ml={3} fd='row'>
          <Radio
            value='individual'
            name='type'
            containerStyle={{ marginRight: '1em' }}
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

        <Box mb={3} pr={30}>
          <Label>Nome<span>*</span></Label>
          <Input name='name' value={values.name} onChange={handleChange} />
          <ErrorField fieldName='name' errors={errors} touched={touched} />
        </Box>

        <Box mb={3} pr={30}>
          <Label>Documento<span>*</span></Label>
          <Input name='document'
            value={values.document}
            maxLength={isBusiness() ? 18 : 14}
            onChange={({ target: { value } }) => setFieldValue('document', isBusiness() ? formatCnpj(value) : formatCpf(value))} />
          <ErrorField fieldName='document' errors={errors} touched={touched} />
        </Box>

        <Box pb={17}>
          <Button type='submit' loading={loading}>Salvar</Button>
        </Box>
      </Flex>
    </form>
  )
}


/**
 * Connect da store com o connect.
 */
export default withFormik<Props, ClientModel>({
  mapPropsToValues: () => ({ name: '', document: '', type: 'individual' }),

  validate: values => {
    const errors: any = {};

    if (!values.name) {
      errors.name = 'Campo Obrigatório';
    }

    if (!values.document) {
      errors.document = 'Campo Obrigatório';
    }

    return errors;
  },

  handleSubmit: (values, { resetForm, props }) => {
    props.createClient(values);
    resetForm();
  },

})(Form);