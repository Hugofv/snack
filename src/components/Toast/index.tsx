import * as alert_actions from '../../actions/alert';

import React, { Fragment, useEffect } from 'react';

import { useAlert } from "react-alert";
import { connect } from 'react-redux';
import AlertModel from '../../models/AlertModel';
import { Dispatch, bindActionCreators, Action } from 'redux';

/**
 * Props do component
 */
interface Props {
  alert: AlertModel;
  readonly deleteAlert: () => Action;
}

/**
 * Component Toast.
 */
const Toast: React.FC<Props> = ({ alert, deleteAlert }: any) => {
  const toast = useAlert();

  useEffect(() => {
    switch (alert.type) {
      case 'sucess':
        toast.success(alert.message)
        break;

      case 'error':
        toast.success(alert.message)
        break;
    }
    deleteAlert()
  }, [alert.type, alert.message, deleteAlert, toast]);

  return (
    <Fragment />
  );
}

/**
 * Método responsável por injetar dados da store no component Toast.
 * 
 * @param state 
 */
const mapStateToProps = (state: any): any => ({
  alert: state.alert
});

/**
 * Método responsável por injetar dados da store no component Toast.
 * 
 * @param dispatch 
 */
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  ...alert_actions
}, dispatch);

/**
 * Connect da store com o connect.
 */
export default connect<Props>(mapStateToProps, mapDispatchToProps)(Toast);
