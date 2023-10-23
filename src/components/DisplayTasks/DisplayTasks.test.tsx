import NoteLayout from "../../layout/NoteLayout";
import {renderWithProviders} from "../../utils/renderWithProviders";
import DisplayTasks from "./DisplayTasks";
import AddTask from "../addTask/AddTask";
import React from "react";
import {screen} from '@testing-library/react'

describe('Add form', () => {
    test('Should appear on screen', async () => {
        renderWithProviders( <NoteLayout notes={<DisplayTasks/>} add={<AddTask/>}/>)

        expect(screen.getByText('Dodaj nowe zadania!')).toBeInTheDocument();
    });
})
