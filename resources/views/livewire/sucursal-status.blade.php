<div class="flex justify-start scale-90">
    <input class="tgl tgl-light chkbx-toggle" id="toggle_{{ $id }}" value="{{ $id }}" type="checkbox"
        {{ $status == 1 ? 'checked="checked"' : '' }} />
    <label class="tgl-btn toggle_{{ $id }}" for="toggle_{{ $id }}" id="divtoggle_{{ $id }}"
        wire:click="changestatus({{ $status == 1 ? 0 : 1 }}, {{ $id }})"></label>
</div>
