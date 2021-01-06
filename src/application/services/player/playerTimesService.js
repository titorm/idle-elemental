import { updatePlayerTimes } from '../../api/methods/playerApi';

const setTimesToPlayer = async (data) => {
    updatePlayerTimes(data);
};

export { setTimesToPlayer };
