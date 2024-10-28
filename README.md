### 🛠 How to Use the Project

### Backend

1. **Clone the Repository**
   - Start by cloning the repository to your local machine:
     ```bash
     git clone https://github.com/Shidowy/Website-Beta
     cd nt-backend
     ```
2. **Set Up a Virtual Environment**
   - It’s best to create a virtual environment for dependencies:
     ```bash
     python -m venv env
     source env/bin/activate  # On Windows: env\Scripts\activate
     ```
     
3. **Install Dependencies**
   - Install the required packages from `requirements.txt`:
     ```bash
     pip install -r requirements.txt
     ```
4. **Configure Environment Variables**
   - Create a `.env` file in the project root with the necessary environment variables:
     ```plaintext
     SECRET_KEY=your-secret-key
     DEBUG=True
     ALLOWED_HOSTS=localhost,127.0.0.1
     DATABASE_URL=postgres://user:password@localhost:5432/dbname
     ```
   - ** Talk to Shidowy (Wyatt), or Daniel
5. **Set Up the Database**
   - Apply migrations to set up the database schema:
     ```bash
     python manage.py migrate
     ```
7. **Run the Development Server**
   - Start the local server to access the project in your browser:
     ```bash
     python manage.py runserver
     ```
8. **Visit**
   - [http://127.0.0.1:8000](http://127.0.0.1:8000) to see the application.
  
   ****

### Frontend
1. **Clone the Repository**
   - Start by cloning the repository to your local machine:
     ```bash
     git clone https://github.com/Shidowy/Website-Beta
     cd nt-frontend
     ```

2. **Install Dependencies**
   - Make sure you have [Node.js](https://nodejs.org/) installed, then install the project dependencies:
     ```bash
     npm install
     ```

3. **Configure Environment Variables**
   - Create a `.env` file in the project root with the necessary environment variables, for example:
     ```plaintext
     VITE_APP_API_URL=http://localhost:8000/api
     ```

4. **Run the Development Server**
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

   - By default, the application will be available at [http://localhost:3000](http://localhost:3000).

5. **Build for Production**
   - When ready to deploy, build the production-ready files:
     ```bash
     npm run build
     ```
