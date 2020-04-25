import React, { Fragment, useState, useContext } from 'react';
import formContext from '../../context/forms/formContext';

const NewProject = () => {

    //Obtener state del formulario
    const projectsContext = useContext(formContext);
    const {form, formerr, showForm, addProject, showError} = projectsContext;

    //State para proyecto
    const [project, updateProject] = useState({
        name:''
    } 
    );

    const {name} = project;

    //Contenido del input
    const onChangeProject = e => {
        updateProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    //Submit 
    const onSubmitProject = e => {
        e.preventDefault();

    //Validar
    if (name === '') {
        showError();
        return;
    }

    //Agregar al state 
    addProject(project);

    //Reiniciar el form
    updateProject({
        name: ''
    });

    }

    // Mostrar form
    const onClickForm = () => {
        showForm();
    }

    return ( 
        <Fragment>
            <button type='button' className='btn btn-primario btn-block' onClick={ onClickForm}>
                Nuevo Proyecto
            </button>
            { 
                form ? (
                    <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProject}>
                        <input type='text' className='input-text' placeholder='Nombre proyecto' name='name' value={name} onChange={onChangeProject}/>
                        <input type='submit' className='btn btn-primario btn-block' value='Agregar proyecto'/>
                    </form>
                ) : null
            }

            { formerr ? <p className='mensaje error'>El nombre es obligatorio</p> : null}
        </Fragment>
     );
}
 
export default NewProject;

