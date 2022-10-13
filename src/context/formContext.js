import React from 'react'
import { useFormik} from 'formik';


// create empty context
const FormikContext = React.createContext({})

// place all of what's returned by useFormik into context
export const Formik = ({ children, ...props}) => {
    const formikStateAndHelpers = useFormik(props);
    return (
        <FormikContext.Provider value={formikStateAndHelpers}>
            {
                typeof children === 'function'
                ? children(formikStateAndHelpers)
                : children
            }
        </FormikContext.Provider>
    );
};
