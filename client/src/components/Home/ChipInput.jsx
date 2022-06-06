import React from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';

export const ChipInput = ({ tags, setTags, sx }) => {
    return (
        <Autocomplete
            sx={sx}
            multiple
            id="tags-filled"
            options={[]}
            defaultValue={[]}
            freeSolo
            onChange={(e, value) => setTags((state) => value)}
            renderTags={(value, tags) =>
                value.map((option, index) => {
                    return (
                        <Chip
                            key={index}
                            variant="outlined"
                            label={option}
                            {...tags({ index })}
                        />
                    );
                })
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search tags"
                    fullWidth
                />
            )}
        />
    )
}

export default ChipInput;