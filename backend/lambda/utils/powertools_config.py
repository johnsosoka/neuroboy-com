"""
AWS Powertools configuration for Lambda.
"""

import os
from aws_lambda_powertools import Logger, Tracer, Metrics
from aws_lambda_powertools.metrics import MetricUnit

# Initialize Powertools
logger = Logger(
    service=os.environ.get('POWERTOOLS_SERVICE_NAME', 'neuroboy-memorial-api'),
    level=os.environ.get('LOG_LEVEL', 'INFO')
)

tracer = Tracer(
    service=os.environ.get('POWERTOOLS_SERVICE_NAME', 'neuroboy-memorial-api')
)

metrics = Metrics(
    namespace="NeuroboyMemorial",
    service=os.environ.get('POWERTOOLS_SERVICE_NAME', 'neuroboy-memorial-api')
)


def add_metric(name: str, value: float, unit: MetricUnit = MetricUnit.Count):
    """Helper to add metrics."""
    metrics.add_metric(name=name, unit=unit, value=value)
