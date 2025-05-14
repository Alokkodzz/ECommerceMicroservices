import psycopg2
from psycopg2 import OperationalError

# Replace with your actual RDS endpoint and credentials
db_host = "eu1-aurora-pgsql1.cadyqeag4uyf.us-east-1.rds.amazonaws.com"
db_name = ""
db_user = "postgres"
db_password = "Spee1der"
db_port = "5432"

def create_connection():
    connection = None
    try:
        connection = psycopg2.connect(
            host=db_host,
            database=db_name,
            user=db_user,
            password=db_password,
            port=db_port
        )
        print("✅ PostgreSQL connection successful")
    except OperationalError as e:
        print(f"❌ The error '{e}' occurred")
    return connection

def execute_query(connection, query):
    connection.autocommit = True
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        result = cursor.fetchone()
        print(f"📊 Query result: {result}")
    except OperationalError as e:
        print(f"❌ The error '{e}' occurred")
    finally:
        cursor.close()

# Connect to the database
conn = create_connection()

# Sample query: get PostgreSQL version
if conn:
    test_query = "SELECT orderdate from alok.orders where id = 2;"
    execute_query(conn, test_query)
    conn.close()
    print("🔒 Connection closed.")
