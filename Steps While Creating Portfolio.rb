Creating React App Using Vite
1.  Open Powercell CMD or create folder and open terminal in VS Code  =>
    # - To create app using vite Run Command: 'npm create vite@latest'
    - if you are in the project folder then Run Command: 'npm create vite@latest ./'
    - if you do not have created folder then Run Command: 'npm create vite@latest'
        After run command will ask package Name: 'enter your folder name here'
2.  Install Other Libraries =>
        # GSAP for animations
            - npm i gsap @gsap/react    
        # Install three.js. and other helper library
            npm i three @react-three/fiber @react-three/drei @react-three/postprocessing
            # Fiber is a react version of three.js. It simplifise the use of three.js in react eco-system.
            - npm i three @react-three/fiber
            # drei is helper library, which in comman task like loader and more.
            - npm i three @react-three/drei
            - npm i three @react-three/postprocessing
        # Install Tailwind CSS for react
            - npm i tailwindcss @tailwindcss/vite
            # Configure the vite plugin
            - Update code in vite.config.ts 
                import { defineConfig } from 'vite'
                import tailwindcss from '@tailwindcss/vite'
                export default defineConfig({
                plugins: [
                    tailwindcss(),
                ],
                })
            - Import Tailwind CSS
                @import "tailwindcss";
            # Restart app using 'npm run dev'
3. Setup index.css file =>
        - follow path '/src/index.css'
4. GLB 3D Models =>
    # GLB models are given in path: public/models
    # To use these models first need to convert into JSX.
    # To convert this go to the path in terminal
    - Rum Command: npx gltfjsx optimized-room.glb
    # It is a file format that allows to render 3D scans in models.
    
