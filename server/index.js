import { server } from './app/index.js';
import { config } from './config.js';


server.listen(config.PORT,()=>{
    console.log(`Server started at ${config.PORT}`);
})
