import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../../context/LoadingContext';
import Spinner from './Spinner';

function RouteLoader() {
    const { isLoading, setIsLoading } = useLoading();
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timeout);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="route-spinner"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ y: -1000, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50"
                >
                    <Spinner />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default RouteLoader;