
import { useEffect } from 'react';
const useTittle = (title) => {

    useEffect(() => {

        document.title = `${title}-Dargon-News`;
        //https://www.npmjs.com/package/react-helmet-async 
        //altranative ways

    }, [title])

}

export default useTittle;