def noop_decorator(*args, **kwargs) -> callable:
    """Decorator that does nothing"""

    def wrapper(func) -> callable:
        return func

    return wrapper


class DummyLimiter:
    """Dummy class for the Limiter"""

    def limit(self, *args, **kwargs) -> callable:
        """Dummy method for the limit"""

        return noop_decorator(*args, **kwargs)

    def init_app(self, app) -> None:
        """Initializes the Flask app with the given configuration"""
