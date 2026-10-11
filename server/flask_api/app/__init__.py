from flask import Flask, jsonify
from flask_cors import CORS

from config import Config
from app.extensions import db, migrate


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    CORS(app)
    db.init_app(app)
    migrate.init_app(app, db)

    @app.get("/api/health")
    def health_check():
        return jsonify({
            "status": "ok",
            "message": "SmartExpense Flask API is running",
        }), 200

    return app
