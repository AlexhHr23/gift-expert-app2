import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 
    const inputVale = 'Goku';

    test('Debe agregar nueva categoria ', () => { 

        const { container } = render( <GifExpertApp /> );

        const init = screen.getByRole('textbox');
        const form = screen.getByRole('form');


     })
 })