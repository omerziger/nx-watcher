import { watch } from "chokidar";
import { debounce } from "./debounce.js";

const watcher = watch('.', {
    persistent: true
});

// rebuild target + affected packages

const handleFileChange = debounce(() => console.log('Change!'), 1000);

watcher.on('change', handleFileChange);