from distutils.log import debug
from api import create_app
import os
from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

app = create_app()

if __name__ == '__main__':
    load_dotenv(os.path.join(BASE_DIR, '.env'), override=True)
    app.run(debug=True, host=f"{os.environ.get('RUN_HOST')}",
            port=f"{os.environ.get('RUN_PORT')}")
