# base auth - Instrucciones de Configuración

## Requisitos previos

1. Asegúrate de tener instalado **Node.js** en tu máquina. Si no lo tienes, puedes descargarlo desde [nodejs.org](https://nodejs.org/).

2. Asegúrate de tener instalado **Git**. Si no lo tienes, puedes descargarlo desde [git-scm.com](https://git-scm.com/).

## Pasos para configurar el proyecto

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local usando Git:

```bash
git clone https://github.com/jtoolify/base-auth.git
```


### 2. Instalar las dependencias

Accede a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
cd base-auth
npm install
```

### 3. Configurar las variables de entorno

Crea un archivo llamado `.env.local` en la raíz del proyecto y agrega las siguientes variables de entorno:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=aqui_se_debe_colocar_la_key
CLERK_SECRET_KEY=aqui_se_debe_colocar_la_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
```

### 4. Ejecutar la aplicación

Una vez configurado todo, ejecuta la aplicación con el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo. Normalmente estará disponible en http://localhost:3000.